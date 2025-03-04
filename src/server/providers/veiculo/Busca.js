import { Knex } from "../../database/Knex/index.js";

export const busca = async (veiculo, motorizacao, ano, valorMin, valorMax) => {
  try {
    const result = await Knex("veiculo")
      .select("*") // Seleciona todas as colunas
      .modify((query) => {
        if (veiculo) query.where("veiculo", "like", `%${veiculo}%`);
        if (motorizacao) query.where("motorizacao", motorizacao);
        if (ano) query.where("ano", ano);
        if (valorMin !== undefined && valorMax !== undefined) {
          query.whereBetween("preco", [valorMin, valorMax]);
        }
      });

    if (!result || result.length === 0) {
      return new Error("Nenhum registro encontrado para o intervalo de datas.");
    }
    return result;

    throw new Error("Erro ao cadastrar o registro"); // Corrigido o erro de digitação
  } catch (error) {
    return new Error("Erro ao cadastrar o registro"); // Corrigido para criar o erro corretamente
  }
};
