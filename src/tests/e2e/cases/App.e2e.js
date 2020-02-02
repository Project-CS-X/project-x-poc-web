import AppPage from '../pages/App.page'
const page = new AppPage()
import { assertNoConsoleErrors } from '../helpers'

fixture`App Page`.page('http://localhost:5000/').afterEach(assertNoConsoleErrors)

test('should should say Learn React', async t => {
  await t.expect(page.linkSelector.innerText).eql('Learn React')
})

// Makes sure there are no errors in the console
test('should not have any logs in console of main window', assertNoConsoleErrors)
