import {Selector, t} from 'testcafe';

fixture`test-app`
    .page('http://localhost:8080');
test('should have welcome title', async () => {
    const welcomeSpan = Selector('#welcomeTitle');

    await t.expect(welcomeSpan.innerText).eql('Welcome');
});
