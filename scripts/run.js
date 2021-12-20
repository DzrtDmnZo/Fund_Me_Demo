const main = async () => {
    const [owner, Alien] = await hre.ethers.getSigners();
    const waveContractFactory = await hre.ethers.getContractFactory('WavePortal');
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();

    let waveTxn = await waveContract.wave('Get ready for the Wave!');
    await waveTxn.wait(); // Wait for the transaction to be mined
  
    const [_, randomPerson] = await hre.ethers.getSigners();
    waveTxn = await waveContract.connect(randomPerson).wave('Sending the Wave!');
    await waveTxn.wait(); // Wait for the transaction to be mined
  
    let allWaves = await waveContract.getAllWaves();
    console.log(allWaves);

  
  console.log("Contract deployed to:", waveContract.address);
  console.log("Contract deployed by:", owner.address);

  let waveCount;
  waveCount = await waveContract.getTotalWaves();

  waveCount = await waveContract.getTotalWaves();

  waveTxn = await waveContract.connect(Alien).wave();
  await waveTxn.wait();

  waveCount = await waveContract.getTotalWaves();

};
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();