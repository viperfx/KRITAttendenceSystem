package clg.krit.KritAttendanceSystem.listener;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.context.ApplicationEvent;
import org.springframework.context.ApplicationListener;

public class ServletListener implements ApplicationListener{

	 private static final Log LOG = LogFactory.getLog(ServletListener.class);
	   
	@Override
	public void onApplicationEvent(ApplicationEvent event) {
		   LOG.info("Event Occurred : " + event);
	}
  
    
}