import React from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import Button from "@material-ui/core/Button"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import MailIcon from "@material-ui/icons/Mail"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"

import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import ExpandLess from "@material-ui/icons/ExpandLess"
import ExpandMore from "@material-ui/icons/ExpandMore"
import Collapse from "@material-ui/core/Collapse"
import Home from "@material-ui/icons/Home"
import Favorite from "@material-ui/icons/Favorite"
import PlayForWork from "@material-ui/icons/PlayForWork"
import LocalPhone from "@material-ui/icons/LocalPhone"
import ArrowForward from "@material-ui/icons/ArrowForward"

const useStyles = makeStyles({
  btnAction: {
    borderStyle: "solid !important",
    borderColor: "#fff !important",
    color: "#2099d1",
    background: "#fff",
    fontSize: "1.5rem",
    fontWeight: "800",
  },
  btnSize: {
    fontSize: "1.5rem",
    padding: "0 4rem",
  },
  listItemText: {
    fontSize: "2rem",
  },

  iconSizeUi: {
    height: "2rem",
    width: "2rem",
  },

  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  toolbarButtons: {
    marginLeft: "auto",
    marginRight: -12,
  },
})

export default function TemporaryDrawer() {
  const classes = useStyles()
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })

  //
  const [anchorEl, setAnchorEl] = React.useState(null)

  function handleClick(event) {
    setAnchorEl(event.currentTarget)
  }

  function handleClose() {
    setAnchorEl(null)
  }
  //

  //
  const [openList, setOpenList] = React.useState(false)

  function handleClickDown() {
    setOpenList(!openList)
  }
  //

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setState({ ...state, [side]: open })
  }

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      // onClick={toggleDrawer(side, false)}
      // onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <Link
          to="/"
          style={{ textDecoration: "none", color: "rgba(0, 0, 0, 0.87)" }}
        >
          <ListItem button>
            <ListItemIcon>
              <Home className={classes.iconSizeUi} />
            </ListItemIcon>
            <ListItemText primary="Inicio" />
          </ListItem>
        </Link>
        <ListItem button onClick={handleClickDown}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Servicios" />
          {openList ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openList} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link
              to="/web-developing"
              style={{ textDecoration: "none", color: "rgba(0, 0, 0, 0.87)" }}
            >
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <ArrowForward />
                </ListItemIcon>
                <ListItemText primary="Desarrollo web" />
              </ListItem>
            </Link>
            <Link
              to="/graphic-design"
              style={{ textDecoration: "none", color: "rgba(0, 0, 0, 0.87)" }}
            >
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <ArrowForward />
                </ListItemIcon>
                <ListItemText primary="Diseño gráfico" />
              </ListItem>
            </Link>

            <Link
              to="/marketing"
              style={{ textDecoration: "none", color: "rgba(0, 0, 0, 0.87)" }}
            >
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <ArrowForward />
                </ListItemIcon>
                <ListItemText primary="Marketing & publicidad" />
              </ListItem>
            </Link>
          </List>
        </Collapse>

        <ListItem button>
          <ListItemIcon>
            <Favorite className={classes.iconSizeUi} />
          </ListItemIcon>
          <ListItemText primary="Nomatives" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <LocalPhone className={classes.iconSizeUi} />
          </ListItemIcon>
          <ListItemText primary="Contactanos" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <PlayForWork className={classes.iconSizeUi} />
          </ListItemIcon>
          <ListItemText primary="Cotiza hoy" />
        </ListItem>
      </List>
      <Divider />
      {/* <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? (
                <InboxIcon className={classes.iconSizeUi} />
              ) : (
                <MailIcon className={classes.iconSizeUi} />
              )}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  )

  const fullList = side => (
    <div
      className={classes.fullList}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  )

  return (
    <AppBar>
      <Toolbar>
        <IconButton
          onClick={toggleDrawer("left", true)}
          edge="start"
          color="inherit"
          aria-label="menu"
          className="buttonBurger"
        >
          <MenuIcon />
        </IconButton>

        <span id="toolNavBar" className={classes.toolbarButtons}>
          <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
            <Button className={classes.btnSize} color="inherit">
              HOME
            </Button>
          </Link>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            className={classes.btnSize}
            color="inherit"
          >
            SERVICIOS
            <ExpandMore />
          </Button>

          <Button className={classes.btnSize} color="inherit">
            NOMATIVES
          </Button>

          <Button className={classes.btnSize} color="inherit">
            CONTACTANOS
          </Button>

          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Link
              to="/web-developing"
              style={{ textDecoration: "none", color: "#000" }}
            >
              <MenuItem onClick={handleClose}>Desarrollo web</MenuItem>
            </Link>
            <Link
              to="/graphic-design"
              style={{ textDecoration: "none", color: "#000" }}
            >
              <MenuItem onClick={handleClose}>Diseño gráfico</MenuItem>
            </Link>
            <Link
              to="/marketing"
              style={{ textDecoration: "none", color: "#000" }}
            >
              <MenuItem onClick={handleClose}>Marketing & publicidad</MenuItem>
            </Link>
          </Menu>
          {/* </Link> */}

          <Button
            variant="contained"
            className={classes.btnAction}
            color="inherit"
          >
            COTIZA HOY
          </Button>
        </span>

        <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
          {sideList("left")}{" "}
        </Drawer>
      </Toolbar>
    </AppBar>
  )
}
