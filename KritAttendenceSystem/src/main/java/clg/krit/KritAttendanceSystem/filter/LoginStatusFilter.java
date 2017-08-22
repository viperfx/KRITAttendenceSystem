package clg.krit.KritAttendanceSystem.filter;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;

public class LoginStatusFilter implements Filter {

	static int count = 0;
	@Override
	public void init(FilterConfig arg0) throws ServletException {
	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {

		PrintWriter out = response.getWriter();

        chain.doFilter(request,response);  
          
        out.print("Total visitors "+(++count));  
        out.close();  
	}

	@Override
	public void destroy() {
	}

}
