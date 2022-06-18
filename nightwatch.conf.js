//  _   _  _         _      _                     _          _
// | \ | |(_)       | |    | |                   | |        | |
// |  \| | _   __ _ | |__  | |_ __      __  __ _ | |_   ___ | |__
// | . ` || | / _` || '_ \ | __|\ \ /\ / / / _` || __| / __|| '_ \
// | |\  || || (_| || | | || |_  \ V  V / | (_| || |_ | (__ | | | |
// \_| \_/|_| \__, ||_| |_| \__|  \_/\_/   \__,_| \__| \___||_| |_|
//             __/ |
//            |___/

module.exports = {
  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  src_folders: ['test'],
  webdriver: {
    start_process: false,
    host: 'remotegeckodriver.nightwatchjs.org',
    port: 443
  },

  test_settings: {
    default: {
      launch_url: 'https://nightwatchjs.org',

      screenshots: {
        enabled: true,
        path: 'screens',
        on_failure: true
      },

      desiredCapabilities: {
        browserName : 'firefox',
        alwaysMatch: {
          acceptInsecureCerts: true,
          'moz:firefoxOptions': {
            args: [
              // '-headless',
              '-verbose'
            ]
          }
        }
      }
    }
  }
};
