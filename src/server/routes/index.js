import { Router } from "express";
import { LoginSignUpController } from "../controller/login/index.js";
import { UsuarioController } from "../controller/usuario/index.js";
import { VeiculoController } from "../controller/veiculo/index.js";
import { verificacaoAutenticacao } from "../shared/middlewares/Autenticacao.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("Teste da api");
});

// Cadastro de usuario e login
router.post(
  "/usuario",
  UsuarioController.createValidation,
  UsuarioController.createUp
);
router.post(
  "/sign",
  LoginSignUpController.singUpValidation,
  LoginSignUpController.singUp
);

// Login
router.post(
  "/login",
  LoginSignUpController.loginValidation,
  LoginSignUpController.login
);

// veiculo
router.post(
  "/veiculo",
  verificacaoAutenticacao,
  VeiculoController.veiculoValidation,
  VeiculoController.veiculoCreate
); // Cadastro
router.get(
  "/veiculo",
  VeiculoController.buscaValidation,
  VeiculoController.busca
);

export { router };
