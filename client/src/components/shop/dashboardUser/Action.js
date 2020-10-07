export const logout = () => {
    localStorage.removeItem("jwt")
    window.location.href = "/";
}