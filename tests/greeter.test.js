import path from "path";
import {
  deployContractByName,
  getAccountAddress,
  emulator,
  init,
  shallPass,
  sendTransaction,
} from "flow-js-testing";

// Increase timeout if your tests failing due to timeout
jest.setTimeout(10000);

describe("Greeting contract", () => {
  let admin;
  let alice;

  beforeEach(async () => {
    const basePath = path.resolve(__dirname, "../cadence");
    const port = 8080;
    const logging = false;

    await init(basePath, { port });
    await emulator.start(port, logging);

    admin = await getAccountAddress("Admin");
    alice = await getAccountAddress("Alice");

    await deployContractByName({
      to: admin,
      name: "Greeter",
      args: ["Hello"],
    });
  });

  afterEach(async () => {
    await emulator.stop();
  });

  test("Greeter.greet", async () => {
    const name = "greet";
    const signers = [alice];
    const args = ["Bob"];
    const [tx] = await shallPass(sendTransaction({ name, signers, args }));

    console.debug(JSON.stringify(tx, null, 2));
  });
});
