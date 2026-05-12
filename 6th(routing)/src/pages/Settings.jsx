function Settings() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Settings</h2>

      <p>Theme: Light Mode</p>
      <p>Notifications: Enabled</p>
      <p>Language: English</p>

      <button style={{ padding: "8px 15px", cursor: "pointer" }}>
        Update Settings
      </button>
    </div>
  );
}

export default Settings;