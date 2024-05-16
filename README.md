# wdiov8browserstackDismissAlertoniPadIssue
Alerts on iOS devices are being dismissed(with the Accept Option) before the browser.dismissAlert() command.

### Error Seen in WebdriverIO Test Runner
```
[safari latest iOS #0-0] An attempt was made to operate on a modal dialog when one was not open
[safari latest iOS #0-0] no such alert: An attempt was made to operate on a modal dialog when one was not open
[safari latest iOS #0-0]     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
[safari latest iOS #0-0]     at async Context.<anonymous> (file:///C:/code/wdio-sample-browserstack/test/specs/test.e2e.js:25:7)
```
