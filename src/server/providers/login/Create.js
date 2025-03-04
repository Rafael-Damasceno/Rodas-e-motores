import { Knex } from "../../database/Knex/index.js";
import { CriptografiaSenha } from "../../shared/services/CriptografiaSenha.js";

export const create = async (data) => {
  try {
    // Parte da criptografia
    const senhaCriptografia = await CriptografiaSenha.gerandoSenha(data.senha);
    data.senha = senhaCriptografia;

    const [result] = await Knex("sign").insert(data).returning("id");
    if (typeof result === "object" && result.id) {
      return result.id;
    } else if (typeof result === "number") {
      return result;
    }

    throw new Error("Erro ao cadastrar o registro1"); // Corrigido o erro de digitação
  } catch (error) {
    console.log(error);
    return new Error("Erro ao cadastrar o registro2"); // Corrigido para criar o erro corretamente
  }
};
