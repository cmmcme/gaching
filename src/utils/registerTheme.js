import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import aphroditeInterface from 'react-with-styles-interface-aphrodite';
import MainTheme from '../theme/mainTheme';

export default function registerInterfaceWithDefaultTheme() {
  ThemedStyleSheet.registerInterface(aphroditeInterface);
  ThemedStyleSheet.registerTheme(MainTheme);
}