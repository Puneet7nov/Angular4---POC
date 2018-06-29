export class IntroductionService {
  private introductionTabs = [
    {
      id: 1,
      name: 'Monitoring',
    },
    {
      id: 2,
      name: 'Analysis and Constraints',
    }
  ];

  getintroductionTabs() {
    return this.introductionTabs;
  }

}
