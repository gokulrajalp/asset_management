const { Employee } = require('../models');

exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.findAll();
    res.json(employees);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getEmployeeById = async (req, res) => {
  const { id } = req.params;

  try {
    const employee = await Employee.findByPk(id);

    if (!employee) {
      return res.status(404).json({ error: 'Employee not found' });
    }

    res.json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createEmployee = async (req, res) => {
  const { name, designation, activity } = req.body;

  try {
    const newEmployee = await Employee.create({
      name,
      designation,
      activity: activity || 'active',
    });

    res.status(201).json(newEmployee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updateEmployee = async (req, res) => {
  const { id } = req.params;
  const { name, designation, activity } = req.body;

  try {
    const employee = await Employee.findByPk(id);

    if (!employee) {
      return res.status(404).json({ error: 'Employee not found' });
    }

    await employee.update({
      name,
      designation,
      activity,
    });

    res.json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deleteEmployee = async (req, res) => {
  const { id } = req.params;

  try {
    const employee = await Employee.findByPk(id);

    if (!employee) {
      return res.status(404).json({ error: 'Employee not found' });
    }

    await employee.destroy();

    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
