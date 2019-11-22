/*
 *  Copyright (c) 2019, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 *  WSO2 Inc. licenses this file to you under the Apache License,
 *  Version 2.0 (the "License"); you may not use this file except
 *  in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing,
 *  software distributed under the License is distributed on an
 *  "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 *  KIND, either express or implied.  See the License for the
 *  specific language governing permissions and limitations
 *  under the License.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Collapse from '@material-ui/core/Collapse';
import FilterListIcon from '@material-ui/icons/FilterList';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        paddingRight: theme.spacing.unit,
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
    },
    title: {
        marginTop: '20px',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '40%',
        marginTop: 0,
    },
    actions: {
        marginTop: '10px',
    },
    expand: {
        marginLeft: 'auto',
    },
    collapsef: {
        marginRight: 0,
    },
});

/**
 * Table toolbar
 */
function CustomTableToolbar(props) {
    const {
        classes, handleExpandClick, expanded, filterColumn, handleColumnSelect, handleQueryChange, query,
    } = props;

    return (
        <Toolbar style={{ display: 'block' }}>
            <div className={classes.root}>
                <div className={classes.title}>
                    <Typography variant='h6' id='tableTitle'>
                        <FormattedMessage id='widget.heading' defaultMessage='REGISTERED APPLICATION USERS' />
                    </Typography>
                </div>
                <div className={classes.actions}>
                    <Tooltip title={<FormattedMessage id='filter.label.title' defaultMessage='Filter By' />}>
                        <IconButton
                            className={classes.expand}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label={<FormattedMessage id='filter.label.title' defaultMessage='Filter By' />}
                        >
                            <FilterListIcon />
                        </IconButton>
                    </Tooltip>
                </div>
            </div>
            <Collapse in={expanded} timeout='auto' unmountOnExit className={classes.collapsef}>
                <div style={{ display: 'flex' }}>
                    <TextField
                        id='column-select'
                        select
                        label={<FormattedMessage id='filter.column.menu.heading' defaultMessage='Filter By' />}
                        InputLabelProps={{
                            style: {
                                whiteSpace: 'nowrap',
                                overflow: 'Hidden',
                                textOverflow: 'ellipsis',
                            },
                        }}
                        className={classes.textField}
                        value={filterColumn}
                        onChange={handleColumnSelect}
                        margin='normal'
                        fullWidth
                    >
                        <MenuItem value='applicationName'>
                            <FormattedMessage id='table.heading.applicationName' defaultMessage='APPLICATION NAME' />
                        </MenuItem>
                        <MenuItem value='users'>
                            <FormattedMessage id='table.heading.users' defaultMessage='USERS' />
                        </MenuItem>
                    </TextField>
                    <TextField
                        id='query-search'
                        label={<FormattedMessage id='filter.value.placeholder' defaultMessage='Filter Value' />}
                        InputLabelProps={{
                            style: {
                                whiteSpace: 'nowrap',
                                overflow: 'Hidden',
                                textOverflow: 'ellipsis',
                            },
                        }}
                        type='search'
                        value={query}
                        className={classes.textField}
                        onChange={handleQueryChange}
                        margin='normal'
                    />
                </div>
            </Collapse>
        </Toolbar>
    );
}

CustomTableToolbar.propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    expanded: PropTypes.string.isRequired,
    filterColumn: PropTypes.string.isRequired,
    query: PropTypes.string.isRequired,
    handleExpandClick: PropTypes.func.isRequired,
    handleColumnSelect: PropTypes.func.isRequired,
    handleQueryChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(CustomTableToolbar);
