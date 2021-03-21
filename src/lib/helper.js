const ADMIN_ROLE = 1;
const ADMIN_STAFF = 2;
const ADMIN_STUDENT = 3;

const role = localStorage.getItem("role");
module.exports = {
    

    isAdmin: () =>  role && parseInt(role, 10) === ADMIN_ROLE,

    isStaff: () =>  role && parseInt(role, 10) === ADMIN_STAFF,

    isStudent: () =>  role && parseInt(role, 10) === ADMIN_STUDENT
}
