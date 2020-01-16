import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Grid from "@material-ui/core/Grid";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import InfoIcon from "@material-ui/icons/Info";
import Icon from "@material-ui/core/Icon";
import CardData from "./data";
import  "./style.css";
import NotificationsIcon from "@material-ui/icons/Notifications";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345
  },
  container: { maxWidth: "1024px", margin: "0 auto", padding: "20px 40px" },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },
  root: {
    flexGrow: 1,
    color: "white"
  }
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid container spacing={3}>
        {CardData.map(CardDataList => {
          return (
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <div
                  className={
                    CardDataList.alarmCount > 0 ? "red-bg " : "blue-bg"
                  }
                >
                  <Grid container spacing={1}>
                    <Grid item className="header-content" xs={8}>
                      <Grid item className="title"xs={12}>
                        {CardDataList.title}
                      </Grid>
                      <Grid item className="title"xs={12}>
                       
                        {CardDataList.subtitle}
                      </Grid>
                      <Grid item className="title"xs={12}>
                       
                        {CardDataList.deviceCount} Devices
                      </Grid>
                    </Grid>
                    <Grid item xs={4}>
                      <CardHeader
                        action={
                          <IconButton
                            className="menu-icon"
                            aria-label="settings"
                          >
                            <MoreVertIcon />
                          </IconButton>
                        }
                      />
                    </Grid>
                  </Grid>
                </div>

                <CardContent>
                  <Grid container className={classes.content} spacing={3}>
                    <Grid className="notification" item xs={4}>
                      <Grid
                        className={
                          CardDataList.alarmCount > 0 ? "red-color " : " "
                        }
                        container
                        spacing={3}
                      >
                        <Grid item xs={3}>
                         
                          {CardDataList.alarmCount > 0 ? (
                            <Icon>notifications_active</Icon>
                          ) : (
                            <NotificationsIcon />
                          )}
                        </Grid>
                        <Grid item xs={9}>
                          {CardDataList.alarmCount} Alarm
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        className={CardDataList.eventCount > 0 ? "blue" : " "}
                        spacing={3}
                      >
                        <Grid item xs={3}>
                         
                          <InfoIcon></InfoIcon>
                        </Grid>
                        <Grid item xs={9}>
                          {CardDataList.eventCount > 0
                            ? CardDataList.eventCount
                            : "0"}
                          {CardDataList.eventCount > 0 ? "Event" : "Events"}
                        </Grid>
                      </Grid>
                      <Grid container spacing={3}>
                        <Grid item xs={3}>
                          <Icon>cloud_circle</Icon>
                        </Grid>
                        <Grid item xs={9}>
                          {CardDataList.commStatus}
                        </Grid>
                      </Grid>
                    </Grid>
                    {CardDataList.values &&
                    CardDataList.values.temperature &&
                    CardDataList.values.humidity ? (
                      <Grid item xs={8}>
                        <Grid container className={classes.content} spacing={0}>
                          <Grid item className="temperature" xs={6}>
                            <div className="temperature-icon">
                              <i className="pxb-temp"></i>
                            </div>
                            <div className="temperature-num">
                              {CardDataList.values.temperature} F
                            </div>
                            <div>Temperature </div>
                          </Grid>
                          <Grid item className="temperature" xs={6}>
                            <div className="temperature-icon">
                              <i className="pxb-moisture blue"></i>
                            </div>
                            <div className="temperature-num">
                              {CardDataList.values.humidity} F
                            </div>
                            <div>Humidity </div>
                          </Grid>
                        </Grid>
                      </Grid>
                    ) : (
                      <Grid item xs={8}>
                        <Grid container className={classes.content} spacing={0}>
                          <Grid item className="temperature" xs={6}>
                            <div className="temperature-icon">
                              <i className="pxb-flow"></i>
                            </div>
                            <div className="temperature-num">
                              {CardDataList.values.flow}KSCFH
                            </div>
                            <div>Flow </div>
                          </Grid>
                          <Grid item className="temperature" xs={6}>
                            <div className="temperature-icon">
                              <i className="pxb-gas_cylinder"></i>
                            </div>
                            <div className="temperature-num">
                              {CardDataList.values.volume}KSCF
                            </div>
                            <div>Volume </div>
                          </Grid>
                        </Grid>
                      </Grid>
                    )}
                  </Grid>
                </CardContent>
                <CardActions>
                  <Grid container className="footer" spacing={3}>
                    <Grid item xs={10}>
                      View Location
                    </Grid>
                    <Grid item xs={2}>
                      <ChevronRightIcon />
                    </Grid>
                  </Grid>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
