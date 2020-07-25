import React from 'react';
import { connect } from 'react-redux';
import themeActions from '../../Redux/themeActions';

const ThemeButton = ({ changeTheme, theme }) => {
  const change = () => {
    if (theme === 'lightTheme') {
      changeTheme('darkTheme');
    } else {
      changeTheme('lightTheme');
    }
  };
  return (
    <button
      style={{ color: theme.fontColor, background: theme.bodybg }}
      onClick={change}
    >
      Change theme!
    </button>
  );
};

const mapStateToProps = state => {
  return {
    theme: state.theme,
  };
};

const mapDispatchToProps = {
  changeTheme: themeActions.themeChange,
};

export default connect(mapStateToProps, mapDispatchToProps)(ThemeButton);
