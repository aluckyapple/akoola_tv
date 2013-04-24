package com.akoolatv.utils;

import java.util.HashMap;

public class StringUtils {
	public static HashMap<String, String> getParameters(String query)
	{
		HashMap<String, String> map = new HashMap<String, String>();
		String[] paraPair = query.split("&");
		for(int i = 0; i < paraPair.length; i ++)
		{
			String[] kv = paraPair[i].split("=");
			if(kv.length == 2)
				map.put(kv[0].trim(), kv[1].trim());
		}
		return map;
	}
	
	public static String getParameter(String key, String query)
	{
		return StringUtils.getParameters(query).get(key);
	}
}
