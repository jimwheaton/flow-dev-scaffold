import Greeter from "../contracts/Greeter.cdc"

transaction(name: String) {

    prepare(authAccount: AuthAccount) { }

    execute {
        Greeter.greet(name)
    }
}