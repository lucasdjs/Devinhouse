  function sleep ( valor ) {
    return new Promise ( (res, rej) => {
        setTimeout(() => res(console.log(valor)), valor * 1000);
    })
  }

  sleep(3);