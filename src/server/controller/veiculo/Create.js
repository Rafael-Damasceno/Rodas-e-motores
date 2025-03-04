import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { validation } from "../../shared/middlewares/Validation.js";
import { VeiculoProvider } from "../../providers/veiculo/index.js";

export const veiculoValidation = validation((getSchema) => ({
  body: getSchema(
    yup.object().shape({
      nome: yup.string().required().min(3).max(25),
      cidade: yup.string().required(),
      dataCriação: yup.string().required(),
      veiculo: yup.string().required(),
      quilometragem: yup.string().required(),
      combustivel: yup.string().required(),
      preco: yup.number().required(),
      motorizacao: yup.string().required(),
      ano: yup.string().required(),
      usuarioId: yup.number().required(),
    })
  ),
}));

export const veiculoCreate = async (req, res) => {
  const result = await VeiculoProvider.create(req.body);
  console.log(result);
  if (result instanceof Error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message,
      },
    });
    return;
  }

  res.status(StatusCodes.CREATED).json(result);
};
