import FungibleToken from 0x1

pub contract Greeter {
    pub event Greeting(_ greeting: String)

    pub let salutation: String

    init(salutation: String) {
        self.salutation = salutation
    }

    pub fun greet(_ name: String): String {
        let greeting = self.salutation
            .concat(" ")
            .concat(name)

        emit Greeting(greeting)

        return greeting
    }
}