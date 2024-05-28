// tests/dbConnection.test.js
import mongoose from 'mongoose';

describe('Database Connection', () => {
  // Connect to the database before running any tests
  beforeAll(async () => {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  });

  // Disconnect from the database after all tests are done
  afterAll(async () => {
    await mongoose.disconnect();
  });

  // Test to check if the connection is successful
  it('successfully connects to the database', async () => {
    const connectionState = mongoose.connection.readyState;
    expect(connectionState).toBe(1); // 1 means connected
  });
});