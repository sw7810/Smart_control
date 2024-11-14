// src/services/AuthService.js
class AuthService {
  login(username, password) {
    // 하드코딩된 사용자 정보
    const hardcodedUser = {
      username: 'test',
      password: '1234'
    };

    // 입력한 아이디와 비밀번호가 하드코딩된 정보와 일치하는지 확인
    if (username === hardcodedUser.username && password === hardcodedUser.password) {
      const user = { username }; // 로그인된 사용자 정보
      localStorage.setItem('user', JSON.stringify(user)); // 로컬 스토리지에 사용자 정보 저장
      return Promise.resolve({ data: user });
    } else {
      return Promise.reject(new Error("Invalid credentials"));
    }
  }

  logout() {
    localStorage.removeItem('user');
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();
