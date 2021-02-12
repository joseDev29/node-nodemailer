module.exports = (data = { name, email, phone, message }) => {
  return `
  
    <div
    style="
      width: 400px;
      max-width: 90%;
      padding: 15px;
      font-family: sans-serif;
      border: none;
      border-radius: 8px;
      background-color: #e8e8e8;
    "
  >
    <h1 style="font-size: 24px; color: #5a5fe8">Tienes un mensaje nuevo</h1>
  
    <p style="font-size: 15px; font-weight: 500; color: #545454">
      <strong style="font-size: 16px; color: #5a5fe8">User:</strong> ${data.name}
    </p>
    <p style="font-size: 15px; font-weight: 500; color: #545454">
      <strong style="font-size: 16px; color: #5a5fe8">Email:</strong>
      ${data.email}
    </p>
    <p style="font-size: 15px; font-weight: 500; color: #545454">
      <strong style="font-size: 16px; color: #5a5fe8">Phone:</strong> ${data.phone}
    </p>
    <p style="font-size: 15px; font-weight: 500; color: #545454">
      <strong style="font-size: 16px; color: #5a5fe8">Message:</strong>
      ${data.message}
    </p>
  </div>
      `;
};
