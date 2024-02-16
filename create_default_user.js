const bcrypt = require('bcrypt');

const createDefaultUser = async (pool) => {
  try {
    const client = await pool.connect();

    // Check if users already exist
    const result = await client.query('SELECT COUNT(*) FROM users');
    const userCount = parseInt(result.rows[0].count);
    console.log("<<<count>>>>", userCount);

    if (userCount === 0) {
      // Create default users
      const defaultUsers = [
        { username: 'employee_master', password: 'employee_password' },
        { username: 'asset_master', password: 'asset_password' },
        { username: 'category_master', password: 'category_password' },
      ];

      // Hash passwords before storing in the database
      const hashedUsers = await Promise.all(
        defaultUsers.map(async (user) => {
          const hashedPassword = await bcrypt.hash(user.password, 10);
          return { ...user, password: hashedPassword };
        })
      );

      // Insert default users into the database
      await Promise.all(
        hashedUsers.map(async (user) => {
          await client.query('INSERT INTO users(username, password) VALUES($1, $2)', [user.username, user.password]);
        })
      );

      console.log('Default users created.');
    }

    client.release();
  } catch (error) {
    console.error('Error creating default users:', error);
  }
};

module.exports = createDefaultUser;
