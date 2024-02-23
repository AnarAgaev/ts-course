const user = {
    name: 'Max',
    id: 123,
    admin: false,
    becomeAdmin: function () {
        this.admin = true
    }
}

const tsxButtonElement = "<button onclick='clickHandler'>Click Me</button>"

function clickHandler(this: HTMLButtonElement, event: Event) {
    const element = event.target
    this.disabled = true
}

const label = `Hello Mr. ${user.name}`