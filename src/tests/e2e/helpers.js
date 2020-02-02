export const assertNoConsoleErrors = async t => {
    const { error } = await t.getBrowserConsoleMessages()
    await t.expect(error).eql([])
}