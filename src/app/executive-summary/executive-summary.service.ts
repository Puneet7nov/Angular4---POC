export class ExecSummaryService {
  private execSummTabs = [
    {
      id: 1,
      name: 'Platform Health',
    },
    {
      id: 2,
      name: 'Platform Review Checklist',
    }
  ];

  getExecSummTabs() {
    return this.execSummTabs;
  }

}