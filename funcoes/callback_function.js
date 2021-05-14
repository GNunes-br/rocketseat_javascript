//callback function
function sayMyName(name) {
    name()
}

sayMyName(
    () => console.log('Guilherme')
)