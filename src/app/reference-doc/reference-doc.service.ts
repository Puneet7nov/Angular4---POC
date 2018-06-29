export class ReferenceDocService {
  private referenceDocTabs = [
    {
      id: 1,
      name: 'Topology Screenshots',
    },
    {
      id: 2,
      name: 'Server List',
    },
    {
      id: 3,
      name: 'Server CPU Load',
    },
    {
      id: 4,
      name: 'Server Memory Load',
    },
    {
      id: 5,
      name: 'Gateways and ION Tools',
    },
    {
      id: 6,
      name: 'Daemons CPU Load',
    },
    {
      id: 7,
      name: 'Router_M CPU  Usage',
    },
    {
      id: 8,
      name: 'Excel Plugin',
    },
    {
      id: 9,
      name: 'Debug Level',
    },
    {
      id: 10,
      name: 'Failover Configuration',
    },
    {
      id: 11,
      name: 'RTD Delays',
    }
  ];

  getReferenceDocTabs() {
    return this.referenceDocTabs;
  }

}