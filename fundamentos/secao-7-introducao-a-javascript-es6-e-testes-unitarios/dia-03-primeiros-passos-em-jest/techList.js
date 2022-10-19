const techList = (techList, name) => {
  if (techList.length === 0) {
    return `Vazio!`;
  }
  // ordernar a lista de tecnologias recebida
  techList = techList.sort();
  // array para salvar a resposta
  const response = [];
  // montar a resposta
  for (const tech of techList) {
    response.push({ tech: tech, name: name });
  }
  // enviar a resposta
  return response;
};

module.exports = techList;
