// Exercise #6
let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};

let getJohnOrders = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve([
          {
            orderId: "001",
            items: ["apple", "banana"],
          },
          {
            orderId: "002",
            items: ["orange", "itim"],
          },
        ]),
      1500
    );
  });
};

// Start coding here

async function getData() {
  try {
    let dataJonhProfile = await getJohnProfile();
    let dataJonOrder = await getJohnOrders();
    console.log(dataJonhProfile);
    console.log(dataJonOrder);
  } catch (err) {
    console.log(err);
  }
}

getData();
