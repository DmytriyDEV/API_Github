const api = "https://api.github.com/users/";
const bodyError = document.querySelector(".bodyError");
const loading = document.querySelector(".img");



const creatError = (error) => {
    const errorDiv = document.createElement("div");
    errorDiv.classList.add("error");
    errorDiv.textContent = error;
    bodyError.append(errorDiv);
    setInterval(() => {
      errorDiv.remove();
    }, 2000);
  };


  const openLoading = () => {
    loading.classList.add("open");
  }


  const hidenLoading = () => {
    loading.classList.remove("open");
  }