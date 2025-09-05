<template>
  <aside class="sidebar">
    <div>
      <div class="profile">
        <img src="@/assets/henry-remove.png" alt="Profile" class="avatar" />
        <div class="pinfo">
          <div class="pname">Filip Martin Jose</div>
          <span class="plevel">Pro Level</span>
        </div>
      </div>

      <nav class="nav">
        <router-link to="/" class="item" active-class="active" exact-active-class="active">
          <span class="icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3l9 8h-3v8a1 1 0 0 1-1 1h-4v-5H11v5H7a1 1 0 0 1-1-1v-8H3l9-8z" />
            </svg>
          </span>
          Dashboard
        </router-link>

        <router-link to="/projects" class="item" active-class="active">
          <span class="icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 5h16v4H4zM4 11h16v8H4z" />
            </svg>
          </span>
          Projects
        </router-link>

        <router-link to="/invoices" class="item" active-class="active">
          <span class="icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM14 2v6h6" />
            </svg>
          </span>
          Invoices
        </router-link>

        <router-link to="/reports" class="item" active-class="active">
          <span class="icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
            </svg>
          </span>
          Reports
        </router-link>
      </nav>
    </div>

    <div class="help">
      <p>Having troubles?<br />Contact us</p>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 350px;
  background: var(--sidebar);
  color: #c9cce0;
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 20px;
  border: 10px solid white;
}

.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 14px;
  padding: 14px;
  margin-bottom: 28px;
}

.avatar {
  height: 80px;
  width: 80px; 
  border-radius: 50%;
  overflow: hidden; 
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin-bottom: 10px;
  border: 1px solid black;
}

.avatar img {
  width: 80px;
  height: 80px;
  object-fit: cover;  
  object-position: center; 
}


.pname {
  color: #e6e9f5;
  font-weight: 600;
}

.plevel {
  background: var(--primary);
  color: #fff;
  border-radius: 8px;
  padding: 3px 10px;
  font-size: 12px;
  margin-top: 10px;
  justify-content: center;
  display: flex;
  justify-self: center;
  width: fit-content;
}

.nav {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  gap: 10px;
  background: var(--sidebar-2);
  width: 100%;
  border-radius: 0 60px 0 0;
  padding-bottom: 100%;
  padding-top: 40px;
}

.item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 30px;
  border-radius: 10px;
  color: #c9cce0;
  text-decoration: none;
  transition: 0.2s;
}

.item:hover,
.active {
  color: #fff;
}

.icon {
  width: 20px;
  height: 20px;
  display: inline-flex;
}

.help {
  text-align: center;
  background: var(--sidebar-2);
  border-radius: 14px;
  padding: 16px;
  font-size: 14px;
  line-height: 1.4;
  padding-top: 100%;
}

.help p {
   background: var(--sidebar);
   border-radius: 10px;
   padding: 10px 0 10px 0;
}
</style>
