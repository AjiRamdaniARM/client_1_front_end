document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Mencegah form submit biasa

    const role = document.getElementById('role').value;

    // Redirect berdasarkan peran
    switch (role) {
      case 'admin':
        window.location.href = '../dashboard/admin/index.html';
        break;
      case 'guru':
        window.location.href = '../dashboard/guru/index.html';
        break;
      case 'kepala_sekolah':
        window.location.href = '../dashboard/kepala_sekolah/index.html';
        break;
      case 'wali_kelas':
        window.location.href = '../dashboard/wali_kelas/index.html';
        break;
      default:
        alert('Silakan pilih peran.');
    }
  });