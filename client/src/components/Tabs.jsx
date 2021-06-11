import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";
import { Paper, Hidden } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import TocIcon from '@material-ui/icons/Toc';
import DetailsIcon from '@material-ui/icons/Details';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Box from "@material-ui/core/Box";

import ResultTable from "./ResultTable";
import CodeTable from "./CodeTable";
import TruthTable from "./TruthTable";

import "./Tabs.css";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`action-tabpanel-${index}`}
            aria-labelledby={`action-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `action-tab-${index}`,
        "aria-controls": `action-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    fab: {
        position: "absolute",
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}));

export default function FloatingActionButtonZoom() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
    };

    const fabs = [
        {
            color: "primary",
            className: classes.fab,
            icon: <PlayArrowIcon />,
            label: "PlayArrowIcon",
        },
    ];

    return (
        <Paper className="Tabs">
            <AppBar position="static" color="default">
                <Tabs
                    selectionFollowsFocus
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    variant="scrollable"
                    scrollButtons="on"
                    aria-label="action tabs example"
                >
                    <Tab label="Code" icon={<EditIcon />} {...a11yProps(0)}></Tab>
                    <Tab label="Truth Table" icon={<TocIcon />} {...a11yProps(1)} />
                    <Tab className='ResultTab' label="Result" icon={<DetailsIcon />} {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <CodeTable />
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <TruthTable />
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <ResultTable />
                </TabPanel>
            </SwipeableViews>
            {fabs.map((fab, index) => (
                <Zoom
                    key={fab.color}
                    in={value === index}
                    timeout={transitionDuration}
                    style={{
                        transitionDelay: `${
                            value === index ? transitionDuration.exit : 0
                        }ms`,
                    }}
                    unmountOnExit
                >
                    <Fab
                        aria-label={fab.label}
                        className={fab.className}
                        color={fab.color}
                    >
                        {fab.icon}
                    </Fab>
                </Zoom>
            ))}
        </Paper>
    );
}
