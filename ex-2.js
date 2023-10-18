//Exercise #2
let getJohnProfile = () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};

// Start coding here

let getData = (data) => {
  console.log(data);
};

let failData = (err) => {
  console.log(err);
};

getJohnProfile().then(getData).catch(failData);
