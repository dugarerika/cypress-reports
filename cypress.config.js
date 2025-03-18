const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "custom-title",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
      allureWriter(on, config);
      return config;
    },

    retries: {
      runMode: 2,
      openMode: 1
    },
    env: {
      SLACK_WEBHOOK_URL: 'https://hooks.slack.com/services/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',

      //STAGING
      URL_OldVendor_Staging: "https://vendor.bookr-dev.com/",
      URL_BetaVendor_Staging: "https://vendor.beta.bookr-dev.com/",
      URL_OldVendor_Production: "https://vendor.bookr.co/",
      URL_BetaVendor_Production: "https://vendor-beta.bookr.co/",
      URL_Deeplink_Staging_artnailcorner: "https://customer.bookr-dev.com/vendors/athary-world-nail-",
      Vendor0_Admin_Username_Staging: "billingbh",
      Vendor0_Admin_Password_Staging: "1234567890",
      // Vendor1_Admin_Username_Staging: "beautiquespa",
      // Vendor1_Admin_Password_Staging: "1234567890",
      //STAGING - BETA VENDOR
      Vendor_Admin_Username_Staging: "artnailcorner",
      Vendor_Admin_Password_Staging: "1234567890",
      Vendor_Staff_Username_Staging: "zumba11",
      Vendor_Staff_Password_Staging: "1234567890",   
      Vendor_Staff1_Username_Staging: "erikat123",
      Vendor_Staff1_Password_Staging: "1234567890",    
      Vendor_ReadOnly_Username_Staging: "readonly835",
      Vendor_ReadOnly_Password_Staging: "1234567890",   
      Vendor_Receptionist_Username_Staging: "recep6",
      Vendor_Receptionist_Password_Staging: "1234567890",   
      
      //STAGING - OLD VENDOR
      Vendor1_Admin_Username_Staging: "cococutsalon",
      Vendor1_Admin_Password_Staging: "1234567890",
      Vendor1_Staff_Username_Staging: "zumbacococut",
      Vendor1_Staff_Password_Staging: "1234567890", 
      Vendor1_ReadOnly_Username_Staging: "readonlyerika2",
      Vendor1_ReadOnly_Password_Staging: "1234567890",  
      Vendor1_Receptionist_Username_Staging: "recepcococut",
      Vendor1_Receptionist_Password_Staging: "1234567890",   
      
      /// PRODUCTION - BETA VENDOR
      Vendor_Admin_Username_Production: "qatartestsalon3@mailinator.com",
      Vendor_Admin_Password_Production: "1234567890",
      Vendor_Staff_Username_Production: "zumbacococut",
      Vendor_Staff_Password_Production: "1234567890",
      Vendor_Staff1_Username_Production: "naomicococut",
      Vendor_Staff1_Password_Production: "1234567890",
      Vendor_ReadOnly_Username_Production: "readonlyerika2",
      Vendor_ReadOnly_Password_Production: "1234567890",   
      Vendor_Receptionist_Username_Production: "recepcococut",
      Vendor_Receptionist_Password_Production: "1234567890",    

      /// PRODUCTION - OLD VENDOR
      Vendor1_Admin_Username_Production: "testsalon",
      Vendor1_Admin_Password_Production: "testsalon@1o",
      Vendor1_Staff_Username_Production: "aura",
      Vendor1_Staff_Password_Production: "1234567890",
      Vendor1_ReadOnly_Username_Production: "readonly92",
      Vendor1_ReadOnly_Password_Production: "1234567890",   
      Vendor1_Receptionist_Username_Production: "receptionist77",
      Vendor1_Receptionist_Password_Production: "1234567890",    
    }
  },
});
