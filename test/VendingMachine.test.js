const VendingMachine = artifacts.require("VendingMachine");

contract("VendingMachine", (accounts) => {
    before(async () => {
        instance = await VendingMachine.deployed();
    })

    it('ensures that the starting balance of the vending machine is 100', async () => {
        let balance = await instance.getVendingMachineBalance()
        assert.equal(balance, 100, 'The initial balance should be 100 donuts')
    })

    it('ensures the balance of vending machine can be updated', async () => {
        await instance.restock(100)
        let balance = await instance.getVendingMachineBalance()
        assert.equal(balance, 200, 'The balance after restocking should be 100 donuts')
    })

    it('allows donuts to be purchase', async () => {
        await instance.purchase(1, {from: accounts[0], value: web3.utils.toWei('3','ether')});
        let balance = await instance.getVendingMachineBalance()
        assert.equal(balance, 199, 'The balance after purchase should be 199 donuts')
    })
})