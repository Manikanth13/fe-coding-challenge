import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { FlexDirectionProperty } from 'csstype';
import React from 'react';

type ViewClassKey = 'root' | 'flexGrow';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column' as FlexDirectionProperty,
    overflow: 'hidden',
  },
  flexGrow: {
    flex: 1,
  },
};

interface IProps {
  flexGrow?: boolean;
  flexDirection?: FlexDirectionProperty;
  style?: React.CSSProperties;
  className?: string;
}

interface IStyleProps {
  classes: {
    [key in ViewClassKey]: string;
  };
}

const View: React.FC<IProps & IStyleProps> = (props) => {
  const classes = props.classes;
  const viewStyles: React.CSSProperties = {};

  if (props.flexDirection) {
    viewStyles.flexDirection = props.flexDirection;
  }

  return (
    <div
      className={classNames(classes.root, {
        [classes.flexGrow]: props.flexGrow,
      }, props.className)}
      style={{ ...props.style, ...viewStyles }}
    >
      {props.children}
    </div>
  );
};

export default withStyles(styles)(View) as React.FC<IProps>;