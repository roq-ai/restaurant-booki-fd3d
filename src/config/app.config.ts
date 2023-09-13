interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Chef'],
  tenantName: 'Restaurant',
  applicationName: 'Restaurant booking engine',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read information about the restaurant',
    "Read the restaurant's menu",
    'Create a table reservation',
    'Manage own table reservation',
  ],
  ownerAbilities: ['Manage restaurant information', 'Invite chefs to the app'],
  getQuoteUrl: 'https://app.roq.ai/proposal/50fe2777-747f-4759-987d-f64aa739fa6e',
};
