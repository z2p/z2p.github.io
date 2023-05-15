$(function() {
    // 获取侧边栏的 HTML 元素
    var sidebar = $('#sidebar');
  
    // 检查本地存储中是否存在侧边栏的状态
    var isCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
    
    // 根据状态设置侧边栏的展开或折叠状态
    if (isCollapsed) {
      sidebar.addClass('collapsed');
    } else {
      sidebar.removeClass('collapsed');
    }
  
    // 监听侧边栏的展开或折叠事件，并将状态保存到本地存储中
    sidebar.on('shown.bs.collapse', function () {
      localStorage.setItem('sidebarCollapsed', 'false');
      alert(isCollapsed);
    });
  
    sidebar.on('hidden.bs.collapse', function () {
      localStorage.setItem('sidebarCollapsed', 'true');
    });
});