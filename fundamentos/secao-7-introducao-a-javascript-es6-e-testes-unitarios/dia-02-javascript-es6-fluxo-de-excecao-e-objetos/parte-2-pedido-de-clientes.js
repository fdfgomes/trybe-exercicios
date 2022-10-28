const order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) =>
  `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${
    order.name
  }, Telefone: ${order.phoneNumber}, ${order.address.street.replace(
    /rua/gi,
    "R."
  )}, Nº: ${order.address.number}, AP: ${order.address.apartment}`;

console.log(customerInfo(order));

const orderModifier = (order) => {
  // clonar o objeto order, e realizar as modificações no objeto clonado
  // preservar o original
  const newOrderObject = Object.assign({}, order);
  // trocar nome do cliente
  newOrderObject.name = "Luiz Silva";
  // trocar valor total do pedido
  newOrderObject.payment.total = 50;
  // criar variável com a resposta que a função retornará
  let response = `Olá ${newOrderObject.name}, o total do seu pedido de `;

  // colocar sabor das pizzas na resposta
  for (let x = 0; x < Object.keys(newOrderObject.order.pizza).length; x += 1) {
    response += `${Object.keys(newOrderObject.order.pizza)[x]}${
      x !== Object.keys(newOrderObject.order.pizza).length - 1 ? ", " : " "
    }`;
  }
  // fazer verificação se existem bebidas no pedido
  if (
    Object.keys(newOrderObject.order).includes("drinks") &&
    Object.values(newOrderObject.order.drinks.length > 0)
  ) {
    response += `e `;
    // colocar bebidas na resposta
    for (const drink of Object.values(newOrderObject.order.drinks)) {
      response += drink.type;
    }
  }
  response += `é R$ ${newOrderObject.payment.total
    .toFixed(2)
    .toString()
    .replace(".", ",")}.`;
  return response;
};

console.log(orderModifier(order));
