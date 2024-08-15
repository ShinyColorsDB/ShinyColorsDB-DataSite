export interface baseSchema {
  c_aptitude: {
    music_aptitude: string;
    cute: string;
    cool: string;
    positive: string;
    relax: string;
    emotional: string;

    express_aptitude: string;
    high: string;
    medium: string;
    slow: string;

    environment_aptitude: string;
    fine: string;
    sunny: string;
    cloudy: string;
    rain: string;
  };

  c_common_criteria: {
    release: string;
    get_method: string;
    rarity: string;
  }

  c_memory_table: {
    skill_name: string;
  }

  c_panel_list: {
    skill_name: string;
    event: string;
    link_appeal: string;
    plus_appeal: string;
    change_effect: string;
  }

  c_query_result: {
    search_result: string;
    empty_response: string;
  }

  c_sidebar: {
    home_page: string;
    history: string;
    skill_filter: string;
    chara_list: string;
  }
}