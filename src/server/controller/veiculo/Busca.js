import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { validation } from "../../shared/middlewares/Validation.js";
import { VeiculoProvider } from "../../providers/veiculo/index.js";

export const buscaValidation = validation((getSchema) => ({
  query: getSchema(
    yup.object().shape({
      veiculo: yup.string().min(3).max(25).optional(),
      motorizacao: yup.string().optional(),
      ano: yup.string().optional(),
      valorMin: yup.number().optional(),
      valorMax: yup.number().optional(),
    })
  ),
}));

export const busca = async (req, res) => {
  const { veiculo, motorizacao, ano, valorMin, valorMax } = req.query;

  // Faz a busca no provider
  const parametroBusca = await VeiculoProvider.busca(
    veiculo,
    motorizacao,
    ano,
    valorMin ? Number(valorMin) : undefined,
    valorMax ? Number(valorMax) : undefined
  );

  if (parametroBusca instanceof Error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: parametroBusca,
      },
    });
    return;
  }

  res.status(StatusCodes.CREATED).json(parametroBusca);
};
