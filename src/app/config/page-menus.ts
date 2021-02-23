var pageMenus = [{
  'icon': 'fa fa-th-large',
  'title': 'Dashboard',
  'url': '',
  'caret': 'true',
  'submenu': [{
    'url': 'admin-dashboard',
    'title': 'Admin Dashboard'
  },{
    'url': 'broker-dashboard',
    'title': 'Broker Dashboard'
  }]
},{
  'icon': 'fas fa-clipboard',
  'title': 'Broker Management',
  'url': 'broker-management'
},{
  'icon': 'fas fa-chart-bar',
  'title': 'Reports',
  'url': 'reports'
},{
  'icon': 'fa fa-envelope',
  'title': 'Claims',
  'url': 'claims'
},{
  'icon': 'fas fa-edit',
  'title': 'Underwritings',
  'url': 'underwritings'
},{
  'icon': 'fa fa-phone',
  'title': 'Support',
  'url': '',
  'caret': 'true',
  'submenu': [{
    'url': 'extra/scrum-board',
    'title': 'Task'
  },{
    'url': 'extra/timeline',
    'title': 'Chat'
  }]
},{
  'icon': 'fa fa-cogs',
  'title': 'Settngs',
  'url': 'settings'
},{
  'icon': 'fa fa-hdd',
  'title': 'Dummy',
  'url': '',
  'badge': '10',
  'submenu': [{
    'url': 'email/inbox',
    'title': 'Inbox'
  },{
    'url': 'email/compose',
    'title': 'Compose'
  },{
    'url': 'email/detail',
    'title': 'Detail'
  }]
}];

export default pageMenus;
