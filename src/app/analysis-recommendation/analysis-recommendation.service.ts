export class AnalRecommService {
  private analRecommTabs = [
    {
      id: 1,
      name: 'Topology Considerations',
    },
    {
      id: 2,
      name: 'Server Performance',
    },
    {
      id: 3,
      name: 'Component Performance',
    },
    {
      id: 4,
      name: 'Failover Configuration',
    },
    {
      id: 5,
      name: 'Platform Data Distribution Delays',
    },
    {
      id: 6,
      name: 'ION Online Diagnostics Portal',
    }
  ];

  getAnalRecommTabs() {
    return this.analRecommTabs;
  }

}