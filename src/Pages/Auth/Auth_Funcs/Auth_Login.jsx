import Api from "../../../Services/Api.jsx";

export async function AuthLogin(email, password) {
  const dados = await Api.post("/Auth/Login", {
    email: email,
    password: password,
  });
  if (dados.status === 200) {
    console.log(`${dados.data.msg} | Token : ${dados.data.token}`);
    return { msg: "", token: dados.data.token };
  } else if (dados.status === 201) {
    console.log(dados.data.msg);
    return { msg: dados.data.msg, token: dados.data.token };
  }
}

export async function AuthRegister(username, email, password) {
  const dados = await Api.post("/Auth/Register", {
    username: username,
    email: email,
    password: password,
  });

  if (dados.status === 200) {
    console.log(`${dados.data.msg} | Token : ${dados.data.token}`);
    return { msg: "", token: dados.data.token };
  } else if (dados.status === 201) {
    console.log(dados.data.msg);
    return { msg: dados.data.msg, token: dados.data.token };
  }
}
